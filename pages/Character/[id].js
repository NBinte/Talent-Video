import React from "react";
import { useRouter } from "next/router";
import { useCharacter } from "../../hooks/useCharacter";
import Image from "react-bootstrap/Image";
import style from "../../styles/Character.module.css";

export default function Character () {
    const router = useRouter();
    // const { id } = router.query;

    const { error, loading, data } = useCharacter(id);

    if (loading) return <>Spinner...</>;

    if (error) return <>Something went wrong...</>;

    return (
        <>
            <div className={style.contentStyle}>
                <div className={style.imageStyle}>
                    <Image src={data.character.image} fluid width={750} height={750}></Image>
                </div>

                <div className={style.textStyle}>
                    <h2>{data.character.name}</h2>
                    <p>{data.character.gender}</p>
                    <div>
                        {data.character.episode.map((eachEpisode, episodeIndex) => {
                            return (
                                <>
                                    <div>
                                        {eachEpisode.name} - <b>{eachEpisode.episode}</b>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
