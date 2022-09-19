import React from "react";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { useCharacters } from "../../hooks/useCharacters";
import style from "../../styles/CharactersList.module.css";

export default function CharactersList () {
    const { error, loading, data } = useCharacters();

    if (loading) return <>Spinner...</>;

    if (error) return <>Something went wrong...</>;

    return (
        <>
            <div className={style.contentStyle}>
                <h3>CharactersList</h3>
                <div className={style.cardContent}>
                    {data.characters.results.map((eachItem, itemIndex) => {
                        return (
                            <>
                                <Link href={`/Character/${eachItem.id}`}>
                                    <Card className={style.cardStyle}>
                                        <div>
                                            <Card.Img variant='top' src={eachItem.image} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{eachItem.name}</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title
                                                and make up the bulk of the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
