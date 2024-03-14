import { connectDb } from "./db";
import { Partner, User } from "./models";


export const getPartners = async (page, itemPerPage) => {
	const ITEM_PER_PAGE = itemPerPage
  try {
    connectDb();
		const count = await Partner.find().count()
    const partners = await Partner.find().limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
    return {count, partners};
  } catch (error) {
    console.log(error);
    throw new Error("Faled to fatch partners");
  }
};

export const getPartnerById = async (id) => {
  try {
    connectDb();
    const partner = await Partner.findById(id);
    return partner;
  } catch (error) {
    console.log(error);
    throw new Error("Faled to fatch partner");
  }
};

export const getUserById = async (id) => {
  try {
    connectDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Faled to fatch user");
  }
};

export const getUsers = async () => {
  try {
    connectDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Faled to fatch partner");
  }
};
