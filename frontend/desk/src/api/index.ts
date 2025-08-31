import ky from "ky";

const cmsApi = ky.create({
  prefixUrl: "http://localhost:8080",
});

export { cmsApi };
