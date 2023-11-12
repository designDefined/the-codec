type DefaultErrorProps = {
  message?: string;
};

export function DefaultError({ message = "codex error" }: DefaultErrorProps) {
  return <div>{message}</div>;
}
