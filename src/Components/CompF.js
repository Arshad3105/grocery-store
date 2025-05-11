import React from "react";
import { UserConsumer } from "./UserContext";

const CompF =() =>
{
    return (
        <div>
            <UserConsumer>{
                 un =>
                {
                    return <h1>Hello {un}</h1>
                }
                }

            </UserConsumer>
        </div>
    )
}

export default CompF