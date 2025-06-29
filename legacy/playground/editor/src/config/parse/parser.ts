import { Element, Text, Descendant } from "slate";

type TextPossiblity = {
  bold: { type: "idle" } | { type: "opened"; at: number } | { type: "closed" };
};

export class TextParser {
  data: Text;
  possibility: TextPossiblity = { bold: { type: "idle" } };

  constructor(text: string) {
    this.data = { text };
  }
  public finish = () => this.data;

  public parse = (char: string): Text | void => {
    if (this.possibility.bold.type === "closed") {
      const finished = this.data;
      this.data = { ...this.data, bold: undefined, text: char };
      this.possibility.bold = { type: "idle" };
      return finished;
    }
    this.data.text += char;

    switch (char) {
      case "*": {
        if (!this.data.text.endsWith("**")) break;
        if (this.possibility.bold.type === "idle") {
          this.possibility.bold = { type: "opened", at: this.data.text.length };
          break;
        }
        // parse bold
        const finished = { ...this.data, text: this.data.text.slice(0, this.possibility.bold.at - 2) };
        this.data.text = this.data.text.slice(this.possibility.bold.at, -2);
        this.data.bold = true;
        this.possibility.bold = { type: "closed" };
        return finished.text.length > 0 ? finished : undefined;
      }
    }
  };
}

type ElementPossiblity = {
  code: { type: "idle" } | { type: "opened"; at: number } | { type: "closed" };
};

const isCodePrefix = (data: Descendant) =>
  Element.isElement(data) &&
  data.type === "paragraph" &&
  data.children.length === 1 &&
  Text.isText(data.children[0]) &&
  data.children[0].text === "```";

export class ElementParser {
  data: Element;
  childParser: ElementParser | TextParser;
  possibility: ElementPossiblity = { code: { type: "idle" } };

  constructor(type: Element["type"], child?: Descendant[]) {
    this.data = { type, children: [] };
    if (child) this.childParser = new ElementParser(type, child);
    else this.childParser = new TextParser("");
  }

  public finish = () => {
    this.data.children.push(this.childParser.finish());
    return this.data;
  };

  public parse = (char: string): Element | void => {
    const result = this.childParser.parse(char);
    if (result) this.data.children.push(result);
  };
}

type RootPossibility = {
  code: { type: "idle" } | { type: "opened"; at: number };
};

export class RootParser {
  data: Element[] = [];
  possibility: RootPossibility = { code: { type: "idle" } };
  childParser: ElementParser = new ElementParser("paragraph");

  constructor() {}

  private transform() {
    const lastData = this.data[this.data.length - 1];
    if (isCodePrefix(lastData)) {
      if (this.possibility.code.type === "idle") this.possibility.code = { type: "opened", at: this.data.length };
      else {
        const codeData = this.data.slice(this.possibility.code.at, -1);
        this.data = this.data.slice(0, this.possibility.code.at - 1);
        this.data.push({ type: "code", children: codeData });
        this.possibility.code = { type: "idle" };
      }
    }
  }

  public finish = () => {
    this.data.push(this.childParser.finish());
    this.transform();
    return this.data;
  };

  public parse = (char: string) => {
    switch (char) {
      case "\n": {
        this.data.push(this.childParser.finish());
        this.childParser = new ElementParser(this.childParser.data.type);
        this.transform();
        break;
      }
      default: {
        this.childParser.parse(char);
      }
    }
  };

  public parseAll = (str: string) => {
    str.split("").forEach(this.parse);
  };
}
