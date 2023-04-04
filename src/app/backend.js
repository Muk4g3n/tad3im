import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import webconfig from "../webconfig.json";
import { auth } from "./endpoints";

const Api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NODE_ENV !== "production" ? webconfig.back_dev_url : webconfig.back_url,
        credentials: "include",
    }),
    endpoints: (builder) => ({
        getSettings: builder.mutation({
            query: () => ({
                url: "/settings",
                method: "GET",
            }),
        }),
        ...auth(builder.mutation),

        /* ******************************* Functions ******************************* */

        /* Edit User Data */
        editUser: builder.mutation({
            query: (body) => ({ url: "/users", method: "PUT", body }),
        }),
        sendMessage: builder.mutation({
            query: (body) => ({ url: "/messages", method: "POST", body }),
        }),
        addToNewsLetter: builder.mutation({
            query: (body) => ({ url: "/messages/news", method: "POST", body }),
        }),
        addWishToList: builder.mutation({
            query: (product) => ({
                url: "/users/addtowishlist",
                method: "PUT",
                body: { product },
            }),
        }),
        /* uploadImage: builder.mutation({
			query: (data) => {
				return {
					url: "files",
					method: "POST",
					body: data,
				};
			},
		}), */
        /* deleteImage: builder.mutation({
			query: (name) => {
				return {
					url: "files/" + name,
					method: "DELETE",
				};
			},
		}), */
    }),
});

// Auth
export const {
    useSignInMutation,
    useSignUpMutation,
    useLoginChildMutation,
    useAddChildMutation,
    useRegisterChildMutation,
    useLogOutMutation,
    useCheckEmailMutation,
    useCheckPhoneMutation,
    useGetUserDataMutation,
    useResetPassMutation,
    useCreateResetMutation,
} = Api;

// functions
export const {
    useEditUserMutation,
    useAddWishToListMutation,
    useGetSettingsMutation,
    useSendMessageMutation,
    useAddToNewsLetterMutation,
    /* useUploadImageMutation,
	useDeleteImageMutation, */
} = Api;

export default Api;
export const api = Api.reducer;
export const path = Api.reducerPath;
