import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

function UserCards({ users }) {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                {
                    users.map((user) => {
                        return (
                            <Card key={user.id} className="user-card text-center pt-4 col-10 col-sm-6 col-md-4 col-lg-3 p-2">
                                <CardImg className="user-img" src={user.avatar} />
                                <CardBody>
                                    <CardTitle>{user.first_name + " " + user.last_name}</CardTitle>
                                    <CardText>
                                        {"Email : " + user.email}
                                    </CardText>
                                </CardBody>
                            </Card>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default UserCards;