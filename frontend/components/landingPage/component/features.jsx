import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import showMessage from '../../errorMessage/showMessage';
import LINKS from '../../../constants/links';
import demo from '../../../public/assets/img/index/demo.png';
import Modal from '../../modal/Modal'; // import the modal component

const Features = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="features__container">
        <div className="features__left_container">
          <div className="features__title1 mt-20">Every Event</div>
          <div className="features__title2">In One Place</div>
          <div className="features__subtitle">
            Tired of figuring out what's happening on campus? We compile event data across 100+ school Instagrams and Discord servers.
          </div>
          <div className="features__left_btn_container">
            <button
              className="explore__btn"
              onClick={handleShowModal}
            >
              View Demo
            </button>

            <Link legacyBehavior href={LINKS.Discord}>
              <a className="create__btn">Join our Discord</a>
            </Link>
          </div>
        </div>
        <div className="features__right_container">
          <Image
            src={demo}
            alt="image not found"
            style={{
              maxHeight: "72vh",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      </section>
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        videoUrl="/demo.mp4"
      />
    </>
  );
};

export default Features;
