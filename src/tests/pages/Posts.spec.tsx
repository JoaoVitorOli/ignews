import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import { getPrismicClient } from "../../services/prismic";
import Posts, { getStaticProps } from "../../pages/posts";

const posts = [
  {
    slug: "new-post",
    title: "new post",
    excerpt: "post excerpt",
    updatedAt: "March, 18"
  }
];

jest.mock("../../services/prismic");

describe("Posts page", () => {
  it("renders correctly", () => {
    render(
      <Posts posts={posts} />
    );

    expect(screen.getByText("new post")).toBeInTheDocument();
  });

  it("loads initial data", async () => {
    const getPrismicClientMocked = mocked(getPrismicClient);

    getPrismicClientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: "new-post",
            data: {
              title: [
                { type: "heading", text: "new post" }
              ],
              content: [
                { type: "paragraph", text: "post excerpt" }
              ]
            },
            last_publication_date: "04-01-2022",
          }
        ]
      })
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [{
            slug: "new-post",
            title: "new post",
            excerpt: "post excerpt",
            updatedAt: "01 de abril de 2022"
          }]
        }
      })
    );
  });
});
