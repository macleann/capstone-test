import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { TestContext } from "./Provider"
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";

export const EventDetail = () => {
    const {getShowById} = useContext(TestContext)
    const {eventId} = useParams()
    const [show, setShow] = useState({})

    useEffect(() => {
        getShowById(eventId)
            .then(res => setShow(res))
            .then(() => console.log(show))
    }, [eventId])

    console.log(eventId)
    console.log(show)

    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
    cloud: {
        cloudName: 'dnq0umskc'
    }
    });

    // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
    const myImage = cld.image(`${show?.image?.publicId}`); 

    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    myImage.resize(fill().width(250));

    return <>
        <h1>{show?.band?.name} at {show?.venue}</h1>
        <h2>Show's id: {show?.id}</h2>
        <div>
            {show?.date} at {show?.time}
        </div>
        <a href={`https://${show?.ticketLink}`}>Ticket Link</a>
        <div>
            <AdvancedImage cldImg={myImage} />
        </div>
        </>
}