import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { token } from "../utils/constant.js";
const baseQuery = fetchBaseQuery({
  baseUrl: "https://test.platosoftware.com/api",
  prepareHeaders: (headers) => {
    headers.set("Connection", "keep-alive");
    return headers;
  },
});

// Wrapper to catch errors
const baseQueryWithErrorHandling = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  console.log(result, "result");
  

  if (result.error) {
    const { status, data } = result.error;
    // console.error("API Error:", status, data);

    // Example: trigger toast
    // toast.error(data?.message || "Something went wrong");
  }

  return result;
};

export const api = createApi({
  reducerPath: "api",
  //   baseQuery: fetchBaseQuery({
  //     baseUrl: "https://test.platosoftware.com/api",
  //     prepareHeaders: (headers) => {
  //       headers.set('Connection', 'keep-alive');
  //       return headers;
  //     }
  //   }),
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: [
    "Plan-Details",
    "Tenant",
    "LogoImage",
    "Geography",
    "TenantAdmin",
    "SearchableUser",
    "Department",
    "Plan",
    "Plans",
    "BenefitType",
    "BenefitSubType",
    "BudgetOwner",
    "BusinessSponsor",
    "BusinessUnit",
    "ProjectCategory",
    "Approver",
    "PlanOverview",
    "Export",
    "getMyPlans",
    "Portfolio",
    "Labor",
    "Comments",
    "Charter",
    "ExpendedView",
    "PortfolioByAttribute",
    "BoughtInService",
    "projectFilter",
  ],

  endpoints: (builder) => ({
    getDashboardDetails: builder.query({
      query: () => ({
        method: "GET",
        url: "/dashboard",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetDashboardDetailsQuery } = api;
