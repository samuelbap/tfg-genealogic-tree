import {json} from "@sveltejs/kit";

export const GET = () => {
  return json({message: "GET endpoint"});
};

export const POST = () => {
  return {message: "POST endpoint"};
};
