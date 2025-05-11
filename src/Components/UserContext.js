import react from "react";

const UserContext = react.createContext()
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer


export {UserProvider , UserConsumer}
export default UserContext
