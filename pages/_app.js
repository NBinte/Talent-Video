import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";

function MyApp ({ Component, pageProps }) {
    const client = new ApolloClient({
        // uri: "https://rickandmortyapi.com/graphql",
        uri: "http://localhost:5000/graphql",
        cache: new InMemoryCache()
    });

    return (
        <>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </>
    );
}

export default MyApp;
