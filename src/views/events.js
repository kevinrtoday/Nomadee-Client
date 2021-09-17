import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Events() {
  return (
    <>
      <MDBCard style={{ maxWidth: "22rem" }}>
        <MDBCardImage
          src="https://lp-cms-production.imgix.net/2021-03/shutterstockRF_365617235.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2https://www.google.com/url?sa=i&url=https%3A%2F%2Fonedayitinerary.com%2Fone-day-in-hanoi-itinerary%2F&psig=AOvVaw0p9Lew99ZyculYx_iwwHz0&ust=1631987905793000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjZ0PLKhvMCFQAAAAAdAAAAABAD"
          position="center"
          alt="..."
        />
        <MDBCardBody>
          <MDBCardTitle>Hanoi</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </MDBCardText>
          <MDBBtn href="#">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard style={{ maxWidth: "22rem" }}>
        <MDBCardImage
          src="https://lp-cms-production.imgix.net/2021-03/GettyRF_512268647.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=50&dpr=2"
          position="left"
          alt="..."
        />
        <MDBCardBody>
          <MDBCardTitle>Bangkok</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </MDBCardText>
          <MDBBtn href="#">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}
