import dotenv from "dotenv";
dotenv.config();

const env = {
  isOpenAiUsed:
    process.env.ISOPENAIUSED.toLowerCase() === "false" ? false : true,
  isChatHistorySaved:
    process.env.ISCHATHISTORYSAVED.toLowerCase() === "false" ? false : true,
};

export default env;
