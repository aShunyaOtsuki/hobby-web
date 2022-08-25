interface Event {
  requestBody: {};
}

export const handler = async (_event: Event) => {
  return "hello world";
};
