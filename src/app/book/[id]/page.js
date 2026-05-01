import BookDetails from "./BookDetails";

const page = async ({ params }) => {
  const { id } = await params;
  return <BookDetails id={id} />;
};

export default page;