import React, { useRef, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { useSpring, animated } from 'react-spring'
import emailjs from "emailjs-com"
import './contactForm.css'

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  z-index: 10;
`;

const ModalWrapper = styled.div`
  width: 700px;
  height: 520px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  background-size: cover;
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  margin-bottom: 35rem;
  opacity: 1;
  white-space: normal;

  @media screen and (max-width: 825px) {
    width: 50vh;
    flex-basis: auto;
    margin: 0 auto;
    margin-bottom: 38rem;
  }
  @media screen and (max-width: 450px) {
    width: 35vh;
    flex-basis: auto;
    margin: 0 auto;
    margin-bottom: 38rem;
  }
  @media screen and (max-width: 315px) {
    width: 25vh;
    flex-basis: auto;
    margin: 0 auto;
    margin-bottom: 38rem;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-100%)`
  })

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      setSubmitSuccess(false);
    }
  };

  const keyPress = useCallback(e => {
    if (e.key === 'Escape' && showModal) {
      setShowModal(false);
      setSubmitSuccess(false);
    }
  }, [setShowModal, showModal])

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => {
      document.removeEventListener('keydown', keyPress)
    }
  }, [keyPress])

  function sendEmail(e) {
      e.preventDefault();

  emailjs.sendForm('service_h7ocasz', 'template_9jtaijk', e.target, 'user_WiyfsTUJQi6oy6E5vtgvY')
      .then((result) => {
          setSubmitSuccess(prev => !prev);
          return submitSuccess;
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  function setFunction() {
    setShowModal(prev => !prev);
    setSubmitSuccess(false);
  };

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
        <animated.div style={animation}>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              {submitSuccess ? <div className="ty-container">
                <h1>Thank you for contacting Soar! We will get back to you as soon as possible.</h1>
              </div> : <div>
                  <div className="container">
                  <h1>Contact</h1>
                  <form onSubmit={sendEmail}>
                          <div className="row pt-5 mx-auto">
                          <p className='contact-text'>Name</p>
                              <div className="col-8 form-group mx-auto">
                                  <input type="text" className="form-control" placeholder="" name="from_name"/>
                              </div>
                              <p className='contact-text'>Email</p>
                              <div className="col-8 form-group pt-2 mx-auto">
                                  <input type="email" className="form-control" placeholder="" name="email" required/>
                              </div>
                              <p className='contact-text'>Message</p>
                              <div className="col-8 form-group pt-2 mx-auto">
                                  <textarea className="form-message" id="" cols="30" rows="8" placeholder="" name="message" required></textarea>
                              </div>
                              <div className="col-8 pt-3 mx-auto">
                                  <input type="submit" className="btn btn-info send-btn" value="Send Message"></input>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>}
            </ModalContent>
            <CloseModalButton
                aria-label='Close modal'
                onClick={() => setFunction()}
              />
          </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  )
};
