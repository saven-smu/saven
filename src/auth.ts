import { createAuth0 } from "@auth0/auth0-vue";

const auth = createAuth0({
    // audience: import.meta.env.VITE_AUTH_AUDIENCE,
    domain: import.meta.env.VITE_AUTH_DOMAIN,
    client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
    redirect_uri: window.location.origin,
});

export default auth;
