import item from "../../../data/item.json";

const nameHandle = (req: any, res: any) => {
  if (req.method) {
    try {
      const { id } = req.query;
      const items = item.find((items) => items.id === parseInt(id));
      res.status(200).json(items);
      console.log(items);
    } catch (err) {
      res.status(404).json({ message: `please try again: ${err}` });
    }
  }
};

export default nameHandle;

export const otherRequest = (req: any, res: any) => {
  switch (req.method) {
    case "GET":
      // get request
      break;
    case "POST":
      //  post request
      break;
    default:
      res.status(404).end("Method Not Allowed");
      break;
  }
};

export const errorHandling = (req: any, res: any) => {
  res.status(400).json({
    statusCode: 400,
    message: "Not Found",
  });
};
