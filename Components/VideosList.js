import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import style from "../styles/VideosList.module.css";
import FormComp from "./FormComp";

export default function VideosList ({
    data,
    loading,
    error,
    videoArray,
    setVideoArray,
    inputValue,
    setInputValue,
    handleSubmit
}) {
    const [clickId, setClickId] = useState(null);
    console.log(clickId);

    const handleEdit = id => {
        setClickId(prevValue => {
            return id;
        });
    };

    if (loading) return <>Spinner...</>;

    if (error) return <>Something went wrong...</>;

    return (
        <>
            <FormComp
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleSubmit={handleSubmit}
                clickId={clickId}
                videoArray={videoArray}
                setVideoArray={setVideoArray}
            ></FormComp>

            <div className={style.contentStyle}>
                <h3>Video List</h3>
                <div className={style.cardContent}>
                    {videoArray?.map((eachItem, itemIndex) => {
                        return (
                            <div key={eachItem.id} className={style.cardDivStyle}>
                                <Card className={style.cardStyle}>
                                    <div>
                                        <iframe
                                            id='ytplayer'
                                            type='text/html'
                                            width='300'
                                            height='300'
                                            src={eachItem.link}
                                            frameBorder='0'
                                        ></iframe>
                                    </div>
                                    <Card.Body className={style.cardBodyStyle}>
                                        <Card.Title>{eachItem.title}</Card.Title>
                                        <Card.Text>
                                            <Button
                                                variant='info'
                                                className={style.buttonStyle}
                                                onClick={() => handleEdit(eachItem.id)}
                                            >
                                                Edit
                                            </Button>
                                            <Button variant='danger'>Delete</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
