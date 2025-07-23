import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/Firebase';

export const ecApi = createApi({
  reducerPath: 'ecApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }), // no se usa, pero requerido
  endpoints: (builder) => ({
    getProductos: builder.query({
      async queryFn() {
        try {
          const querySnapshot = await getDocs(collection(db, 'productos'));
          const productos = [];
          querySnapshot.forEach(doc => {
            productos.push({ id: doc.id, ...doc.data() });
          });
          return { data: productos };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
  }),
});

// Hooks generados automáticamente
export const { useGetProductosQuery } = ecApi;
