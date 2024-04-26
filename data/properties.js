// This data file should export all functions using the ES6 standard as shown in the lecture code
import { properties } from '../config/mongoCollections.js';
import { ObjectId } from 'mongodb';
import { validateZip, checkDecimalValue, validateNumber, validateObject, validateString } from '../helpers.js';

export const create = async (
  address,
  price,
  ownerId,
  location,
  images,
  details
) => {

  if(!address ||
    !price ||
    !ownerId ||
    !location ||
    !images ||
    !details){
       throw "All fields must be defined";
    }

  address  = validateObject(address, "address");
  if(!address.street) throw 'street must be present'; else validateString(address.street, "street");
  if(!address.apartmentNum) throw 'apartmentNum must be present'; else validateString(address.apartmentNum, "apartmentNum");
  if(!address.city) throw 'city must be present'; else validateString(address.city, "city");
  if(!address.zip) throw 'zip must be present'; else validateZip(address.zip, "zip");
  price = validateNumber(price, "price");
  if(!ObjectId.isvalid(ownerId)) throw "ownerId is not valid";
  location = validateObject(location, "location");
  if(!location.latitude) throw 'latitude must be present'; else checkDecimalValue(latitude, "latitude",6);
  if(!location.longitude) throw 'longitude must be present'; else checkDecimalValue(longitude, 'longitude',6);
  details = validateObject(details, "details");
  if(!details.description) throw 'description must be present'; else validateString(details.description, "description");
  if(!details.area) throw 'area must be present'; else validateNumber(details.area, "area");
  

  let newProperty = {
    address: address,
    price: price,
    ownerId: ownerId,
    location: location,
    favouriteCount: 0,
    images: images,
    details: details,
    comments: [],
  };


  let propertyCollection = await properties();
  const insertInfo = await propertyCollection.insertOne(newProperty);
  if (!insertInfo.acknowledged || !insertInfo.insertedId) {
    throw new Error("Couldn't add property");
  }
  const newId = insertInfo.insertedId.toString();
  const theProperty = get(newId);
  return theProperty;
};

export const getAll = async () => {
  let propertyCollection = await properties();
  let propertyList = await propertyCollection.find({}, {projection: {address: 1},}).toArray();
  if (!propertyList) throw "Could not get all properties";
  return propertyList;
};

export const get = async (propertyId) => {
  // const id = validation.checkId(propertyId);
  let propertyCollection = await properties();
  const theProperty = await propertyCollection.findOne({
    _id: new ObjectId(propertyId),
  });
  if (!theProperty) {
    throw new Error('No property with that id');
  }
  return theProperty;
};

export const remove = async (propertyId) => {
  let propertyCollection = await properties();
  const deletionInfo = await propertyCollection.findOneAndDelete({
    _id: new ObjectId(propertyId),
  });

  if (!deletionInfo) {
    throw `Could not delete property with id of ${propertyId}`;
  }

  return { _id: deletionInfo._id, deleted: true };
};

export const update = async (
  propertyId,
  address,
  price,
  ownerId,
  location,
  favouriteCount,
  images,
  details,
  comments
) => {
  let getCollectionFn = await properties();

  await getCollectionFn.updateOne(
    { _id: new ObjectId(propertyId) },
    {
      $set: {
        address: address,
        price: price,
        ownerId: ownerId,
        location: location,
        favouriteCount: favouriteCount,
        images: images,
        details: details,
        comments: comments
      },
    }
  );

  return await get(propertyId);
};
