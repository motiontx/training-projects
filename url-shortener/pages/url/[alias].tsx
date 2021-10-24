import dbConnect from "../../lib/dbconnect";
import URL from "../../models/url";

function Redirect() {
  return null;
}

export const getServerSideProps = async ({ params }: any) => {
  await dbConnect();
  const urlShorten = await URL.findOne({
    alias: params.alias,
  });

  if (urlShorten) {
    return {
      redirect: {
        destination: urlShorten.url,
        permanent: false,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default Redirect;
