import '../App.css';
import React from 'react'
import {Container , Row , Col} from 'react-bootstrap'

function Banner() {
    return (
        <div>

            <Container fluid id="banner" className="p-5" >
                <Row >
                    <Col className="mt-3">
                        <h1>Popular Categories</h1>
                    </Col>
                </Row>
                <Row className="mt-5 d-flex justify-content-center">
                    <Col xs={11} lg={3}>
                        <div>
                            <img 
                                src="https://images.unsplash.com/photo-1563212107-c0cd3b51dc0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1363&q=80" 
                                alt="gambar-renovation"
                                className="w-100 mb-3 mb-lg-0"
                            />
                        </div>
                    </Col>
                    <Col xs={12} lg={3} className="text-start px-4" >
                        <h1>Renovation</h1>
                        <p>
                            Merenovasi rumah tinggal dengan gaya sesuai permintaaan customer yang didominasi warna 
                            merah muda untuk menunjukan sisi playful,sehingga rumah tidak hanya jadi tempat tinggal, tapi
                            juga jadi tempat bermain.
                        </p>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Banner
