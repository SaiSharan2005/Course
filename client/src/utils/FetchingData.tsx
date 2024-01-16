// FetchingData.ts
import { useState } from 'react';

interface IFetchDataProps {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  header: { "Content-Type": string };
  data: object;
}

export interface OutputProps {
  loading: boolean;
  responseFromServer: object;
}

export const useFetchData = (): [(props: IFetchDataProps) => Promise<OutputProps>] => {
    const [loading, setLoading] = useState<boolean>(true);
    const [responseFromServer, setResponseFromServer] = useState<object>({});
  return [
    async ({ url, method, header, data }: IFetchDataProps) => {

      try {
        const response = await fetch(url, {
          method: method,
          headers: header,
          body: JSON.stringify(data)
        });
        const json = await response.json();
        // console.log(json)
        await setResponseFromServer(json);
      } catch (error) {
        alert("Something went wrong while fetching data from the server....");
      } finally {
        setLoading(false);
      }

      return { loading, responseFromServer };
    },
  ];
};
