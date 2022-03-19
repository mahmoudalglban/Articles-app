import AddressCom from "../components/AddressCom";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import SeoCom from "../components/SeoCom";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mkyglab",
        "template_q8y1m5o",
        form.current,
        "7r4sgU0m0puQlsGBS"
      )
      .then(
        (result) => {
          alert("تم الارسال بنجاح سنقوم بالرد عليك في اقرب وقت ممكن ");
        },
        (error) => {
          alert("حدث خطأ الرجاء المحاوله مره اخري  ");
        }
      );
    e.target.reset();
  };

  return (
    <div className="container">
      <div>
        <SeoCom
          title="اتصل بنا"
          description=" صفحه للتواصل مع مسئولي الموقع . الرجاء التواصل معنا في حاله ان كنت تريد الحصول علي معلومه او اي استفسار بخصوص الموقع "
        />
      </div>
      <div className="bg-white text-center my-5 border-top border-primary border-5">
        <h4 className=" p-2">اتصل بنا</h4>
      </div>

      <div className="bg-black mt-3">
        <AddressCom title="للإعلان معنا " />
      </div>

      <div className="me-3">
        <h6 className="fw-bolder text-black">العنوان</h6>
        <p className="fw-bold me-3">
          29 أ عمارات زهرة فيصل _ شارع مستشفي الهرم _ الهرم
        </p>
        <h6 className="fw-bold text-black">البريد الإلكترونى</h6>
        <p className="fw-bolder text-black me-3">
          mahmoudhussien2051995@gmail.com
        </p>
        <h6 className="fw-bolder text-black">التليفون </h6>
        <p className="fw-bold text-black me-3"> 01158487605</p>
      </div>

      <div className="bg-black mt-3">
        <AddressCom title="للتواصل معنا " />
      </div>
      <div className="mb-5 fw-bold">
        برجاء ملئ البيانات بالاسفل وسوف نقوم بالرد عليها فى اسرع وقت خلال ايام
        العمل الرسمية من الاحد الى الخميس
      </div>

      <form ref={form} className="mb-5" onSubmit={sendEmail}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bold">
            الاسم*
          </label>
          <input
            type="text"
            className="form-control "
            id="name"
            name="name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">
            البريد الالكتروني*
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label fw-bold">
            التليفون
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            name="phone"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label fw-bold">
            موضوع الرسالة*
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label fw-bold">
            الرسالة*
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            name="message"
          ></textarea>
        </div>

        <div className="d-grid gap-2 col-12 mx-auto">
          <button className="btn btn-primary fw-bold " type="submit">
            ارسال
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
