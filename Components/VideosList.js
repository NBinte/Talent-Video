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
    const [clickId, setClickId] = useState("");

    const handleEdit = id => {
        setClickId(prevValue => {
            return id;
        });
    };

    const handleDelete = id => {
        function filterFunc (value) {
            return value.id != id;
        }

        let updatedArray = videoArray.filter(filterFunc);

        setVideoArray(prevValue => {
            return updatedArray;
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
                <h3>Studio Ghibli Collection</h3>
                <div className={style.cardContent}>
                    {videoArray?.map((eachItem, itemIndex) => {
                        return (
                            <Card className={style.cardStyle} key={eachItem.id}>
                                <div>
                                    <iframe
                                        id='ytplayer'
                                        type='text/html'
                                        width='350'
                                        height='350'
                                        src={eachItem.link}
                                        frameBorder='0'
                                        allowFullScreen='allowfullscreen'
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
                                        <Button
                                            variant='danger'
                                            onClick={() => handleDelete(eachItem.id)}
                                        >
                                            Delete
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
