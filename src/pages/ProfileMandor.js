import {useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getMandorByIdAction,uploadFotoMandorAction} from '../redux/actions/mandor.action'
import {getPortofolioMandorAction,deletePortofolioMandorAction} from '../redux/actions/portofolio.action'
import {Container ,  Row , Col , Button , Form , Card , CardDeck} from 'react-bootstrap';  
import ModalUploadPortofolio from '../components/ModalUploadPortofolio';

function ProfileMandor() {
    const [addPortofolio, setAddPortofolio] = useState(false)
    const [imageSelected,setImageSelected] = useState("")
    const dispatch = useDispatch()
    const mandorById = useSelector((state)=>state.mandor.data)
    const portofolioMandor = useSelector((state)=>state.PortofolioMandor)

    function hitModalAddPortfolio (){
        setAddPortofolio(true)
    }

    useEffect(()=> {
        dispatch(getMandorByIdAction())
    },[dispatch])

    useEffect(()=> {
        dispatch(getPortofolioMandorAction())
    },[dispatch])

    return (
        <div>
            <Container fluid className="p-0 position-relative"> 
                <img
                    alt=""
                    id="headerImg"
                    src="https://images.unsplash.com/photo-1541976590-713941681591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" 
                />
                <div id="headerText">
                    <h1>MANDOR PROFILE</h1>
                </div>
            </Container>
            <Container className="my-5" id="customText">
                <Row >
                    <Col className=" text-lg-end" xs={12} lg={6}>
                        <img 
                            alt=""
                            id="profileAvatar"
                            src={mandorById.fotoProfil} 
                        />
                    </Col>
                    <Col className="text-lg-start" xs={12} lg={6}>
                        <h1 className="text-capitalize display-5"> {mandorById.mandorName}</h1>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            <span className="text-capitalize "> {mandorById.lokasi}</span> 
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <span className="text-capitalize "> {mandorById.nomorTelpon}</span> 
                        </p>
                        <p className="text-secondary">{mandorById.email}</p>
                    </Col>

                </Row>

                <Row className="d-flex flex-row justify-content-center d-lg-block">
                    <Col className="pt-2 pb-3" xs={9} lg={11}>
                        <Form>
                            <Form.File 
                                type="file"
                                clasName=""
                                id="fileInput"
                                onChange={(event)=> {
                                    setImageSelected(event.target.files[0])
                                }}
                            />
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col lg={9}>
                        <Button id="bg-highlight3" className={imageSelected ? "ms-lg-5" : "disabled ms-lg-5" } onClick={(event)=>dispatch(uploadFotoMandorAction(imageSelected,event,setImageSelected))}>Upload Foto Profil</Button>
                    </Col>
                </Row>
                <Row id="mandor-profile-portfolio-row">
                    <Col className="d-flex flex-row justify-content-center" xs={12}>
                        <p className="fs-4" >PORTOFOLIO</p>
                        <Button id="mandor-profile-portfolio-add-button" className="ms-1 border border-none" onClick={hitModalAddPortfolio}>+</Button>
                    </Col>
                    <Col xs={12}>
                        <hr></hr>
                    </Col>
                </Row>
            
                <CardDeck>
                    <Row className="d-flex flex-row justify-content-center"> 
                    {portofolioMandor.data ? 
                        portofolioMandor.data.length>0?
                        <></>
                        : <p className="text-secondary">Yuk, tambahkan <span id="highlight">portofolio</span> agar profilemu semakin menarik</p>
                    : null
                    }
                        {!!portofolioMandor.data && 
                            portofolioMandor.data.map((items)=> (

                                <Col className="mt-5" xs={11} lg={4}>
                                    <Card>
                                        <Card.Img 
                                            alt=""
                                            variant="top" 
                                            src={items.fotoPortofolio}
                                            id="mandor-profile-portfolio-image"
                                        />
                                        <Card.Body>
                                        <Card.Title className="text-capitalize">{items.judulPortofolio}</Card.Title>
                                        </Card.Body>
                                        <Card.Footer>
                                        <Button variant="" type="button" onClick={(event)=>dispatch(deletePortofolioMandorAction(items,event))}>HAPUS FOTO INI</Button>
                                        </Card.Footer>
                                    </Card>
                                </Col>

                            ))
                        }
                    </Row>
                </CardDeck>

                {addPortofolio ? 
                    <ModalUploadPortofolio setAddPortofolio={setAddPortofolio}/>
                : null
                }

            </Container>
        </div>
    )
}

export default ProfileMandor
