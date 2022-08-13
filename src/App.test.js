import { render, waitFor, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  fetch.resetMocks();
});

describe("Testing jest fetch mocks by getting github name", () => {
  test("recieves GitHub name from GitHub REST API using jest fetch mock", async () => {
    fetch.mockResponseOnce(JSON.stringify({ name: "Kyle Larsen" }));
    render(<App />);
    const githubName = await waitFor(() =>
      screen.getByRole("heading", { level: 2 })
    );
    expect(githubName).toHaveTextContent("Kyle Larsen");
  });
});

describe("Testing jest fetch mocks by getting github url", () => {
  test("recieves github url from github REST API using jest fetch mock", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({ html_url: "https://github.com/kylelarsen12" })
    );
    render(<App />);

    const githubURL = await waitFor(() => screen.getByRole("link"));
    expect(githubURL).toHaveAttribute(
      "href",
      expect.stringContaining("github.com")
    );
  });
});

describe("test fetch mock by getting github profile image", () => {
  test("Gets profile image", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        avatar_url: "https://avatars.githubusercontent.com/u/39222055?v=4",
      })
    );
    render(<App />);
    const imageURL = await waitFor(() => screen.getByAltText("Github pp"));
    expect(imageURL).toHaveAttribute(
      "src",
      expect.stringContaining("githubusercontent")
    );
  });
});
