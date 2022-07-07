import {
    createClient,
    createCurrentUserHook,
} from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATABASE,
    projectId: process.env.NEXT_PUBLIC_SANITY_ID,
    apiVersion: "2021-10-21",
    useCdn: process.env.NODE_ENV === "production",
}
export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(sanityClient).image(source);

export const useCurrentUser = createCurrentUserHook(config);