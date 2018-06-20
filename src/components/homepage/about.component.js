import React, { Component } from 'react';
import Media from "react-media";

class About extends Component {

  generateContent(isMobile = false) {
    return (
      <section className={"about-container " + ((isMobile) ? 'is-mobile' : null)}>
        <h3 className="title is-3">Why <span>Us</span></h3>
        <hr />
        <div className="columns">
          <div className="column">
            <p>
              Berdiri sejak tahun 1959, sudah lebih dari 50 tahun Raja Kawat telah membuktikan kualitas dan pengalamannya.
            </p>
            <p>
              Raja Kawat senantiasa memperhatikan kualitas bahan yang digunakan di dalam setiap project.
            </p>
          </div>
          <div className="column">
            <p>
              Tenaga kerja yang profesional, memastikan proses pengerjaan setiap project berjalan relatif lebih cepat. Sehingga customers bisa segera mendapatkan hasil akhir yang diinginkan.
            </p>
          </div>
        </div>
      </section>
    )
  }

  render() {
    return (
      <Media query="(max-width: 420px)">
        {matches =>
          matches ? (
            this.generateContent(true)
          ) : (
            this.generateContent()
          )
        }
      </Media>
    );
  }
}

export default About;
