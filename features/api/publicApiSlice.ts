import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the "tags" we will use for caching and invalidation.
const tagTypes = ["Room", "Booking", "Availability"];

export const publicApiSlice = createApi({
  reducerPath: "publicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: tagTypes,
  endpoints: (builder) => ({
    // === PUBLIC ROOM ENDPOINTS ===
    getPublicRooms: builder.query<any[], void>({
      query: () => "/rooms",
      transformResponse: (response: { data: any[] }) => response.data,
      providesTags: (result = []) => [
        { type: "Room", id: "LIST" },
        ...result.map(({ id }) => ({ type: "Room" as const, id })),
      ],
    }),

    getPublicRoomById: builder.query<any, number>({
      query: (id) => `/rooms/${id}`,
      transformResponse: (response: { data: any }) => response.data,
      providesTags: (result, error, id) => [{ type: "Room", id }],
    }),

    getRoomAvailability: builder.query<
      { checkIn: string; checkOut: string }[],
      number
    >({
      query: (id) => `/rooms/${id}/availability`,
      transformResponse: (response: { data: any[] }) => response.data,
      providesTags: (result, error, id) => [{ type: "Availability", id }],
    }),

    // === PUBLIC BOOKING ENDPOINTS ===
    createBooking: builder.mutation<any, any>({
      query: (bookingData) => ({
        url: "/bookings",
        method: "POST",
        body: bookingData,
      }),
      // When a booking is created, we want to refetch the availability for that room.
      invalidatesTags: (result, error, { roomId }) => [
        { type: "Availability", id: roomId },
      ],
    }),

    getBookingByPublicId: builder.query<any, string>({
      query: (bookingId) => `/bookings/${bookingId}`,
      transformResponse: (response: { data: any }) => response.data,
      providesTags: (result, error, bookingId) => [
        { type: "Booking", id: bookingId },
      ],
    }),
  }),
});

// Export the auto-generated hooks
export const {
  useGetPublicRoomsQuery,
  useGetPublicRoomByIdQuery,
  useGetRoomAvailabilityQuery,
  useLazyGetRoomAvailabilityQuery, // Also export the lazy version for on-demand checks
  useCreateBookingMutation,
  useGetBookingByPublicIdQuery,
  useLazyGetBookingByPublicIdQuery, // For the "Find My Booking" page
} = publicApiSlice;
