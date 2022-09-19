import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import style from "../styles/Form.module.css";
import { useVideo } from "../hooks/useVideo";

export default function FormComp ({
    inputValue,
    setInputValue,
    handleSubmit,
    clickId,
    videoArray,
    setVideoArray
}) {
    const { error, loading, data } = useVideo(clickId);

    console.log(data);

    useEffect(() => {
        if (data && !loading) {
            let linkValue = data.Video.link.split("embed/");

            setInputValue(prevValue => {
                return { ...inputValue, title: data.Video.title, link: linkValue[1] };
            });
        }
    }, [clickId, loading]);

    const handleUpdate = id => {
        const updatedArray = videoArray.map((eachItem, itemIndex) => {
            if (eachItem.id == id) {
                return {
                    ...eachItem,
                    title: inputValue.title,
                    link: `https://www.youtube.com/embed/${inputValue.link}`
                };
            } else {
                return eachItem;
            }
        });

        setVideoArray(prevValue => {
            return updatedArray;
        });
    };

    return (
        <>
            <Form className={style.formClass} onSubmit={handleSubmit}>
                <Form.Group controlId='title'>
                    <Form.Label className={style.formLabel1}>Title</Form.Label>

                    <Form.Control
                        type='text'
                        placeholder='Enter title'
                        name='title'
                        value={inputValue.title}
                        className={style.formInput}
                        onChange={e => {
                            setInputValue(prevValue => {
                                return { ...inputValue, [e.target.name]: e.target.value };
                            });
                        }}
                    />
                </Form.Group>

                <Form.Group controlId='link'>
                    <Form.Label className={style.formLabel}>Video Id</Form.Label>

                    <Form.Control
                        type='text'
                        placeholder='Enter video id'
                        name='link'
                        value={inputValue.link}
                        className={style.formInput}
                        onChange={e => {
                            setInputValue(prevValue => {
                                return { ...inputValue, [e.target.name]: e.target.value };
                            });
                        }}
                    />
                </Form.Group>

                <div>
                    <Button className={style.formButton} variant='light' type='submit'>
                        Add
                    </Button>
                    <Button
                        className={`${style.formButtonUpdate} ${
                            clickId ? style.formButtonUpdateVisible : ""
                        }`}
                        variant='light'
                        onClick={() => handleUpdate(clickId)}
                    >
                        Update
                    </Button>
                </div>
            </Form>
        </>
    );
}
