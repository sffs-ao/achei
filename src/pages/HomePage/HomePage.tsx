import { useState, useEffect, useRef } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

import HeaderHomePage from "./Layout/Header/Header";
import ContactCard from "./Access/ContactCard/ContactCard";
import FunctionCard from "./Access/FunctionCard/FunctionCard";
import CourseCard from "./Access/CourseCard/CourseCard";
import About from "./Access/About/About";
import Solution from "./Access/Solution/Solution";
import DepoimentsCard from "./Access/DepoimentsCard/DepoimentsCard";
import Footer from "./Layout/Footer/Footer";
import Slogan from "./Access/Slogan/Slogan";
import Faq from "./Access/Faq/Faq";
import Register from "./Access/Register/Register";
import Scroll from "./Access/Scroll/Scroll";
import { GET_CLASSES_PUBLIC } from "../../lib/API";

interface Course {
  course: string;
  level: string;
  structor: string;
  structor_about: string;
  course_state: string;
  imageCourse: string;
}

export default function Start() {
  const [cursos, setCursos] = useState<Course[]>([]);
  const sectionsRef = useRef<(HTMLDivElement | HTMLUListElement | null)[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await GET_CLASSES_PUBLIC();
        console.log("courses", data);

        if (!Array.isArray(data.courses)) {
          throw new Error("A resposta da API não contém um array de cursos");
        }

        const mappedCourses: Course[] = data.courses.map((course) => ({
          course: course.course_name,
          level: course.level,
          structor: "Se inscreva agora",
          structor_about: course.description,
          course_state: course.status || "Disponível",
          imageCourse: course.image_link,
        }));

        setCursos(mappedCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const depoimentsData = [
    {
      text_dep: "Aprendi muito e me senti muito acolhido.",
      image_dep: "https://i.ibb.co/w6N36Qv/doc-03.jpg",
      name_dep: "Carlos Souza",
      position_dep: "Aluno",
    },
    {
      text_dep: "A experiência foi incrível e superou minhas expectativas!",
      image_dep:
        "https://images.pexels.com/photos/936120/pexels-photo-936120.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
      name_dep: "Ana Silva",
      position_dep: "Aluna",
    },
    {
      text_dep: "Ótima didática e conteúdo atualizado!",
      image_dep: "https://i.ibb.co/Y75BJKw/doc-01.jpg",
      name_dep: "Maria Oliveira",
      position_dep: "Ex-Aluna",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const faqs = [
    {
      number: "01",
      question: "Quem somos?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      number: "02",
      question: "O que fazemos?",
      answer: "A aliquam ab error non aspernatur.",
    },
    {
      number: "03",
      question: "Como nos contatar?",
      answer: "Contate nosso suporte 24/7.",
    },
  ];

  return (
    <div className="home-page">
      <HeaderHomePage />

      <div
        className="hide"
        ref={(el: HTMLDivElement | null) => sectionsRef.current.push(el)}
      >
        <Slogan />
      </div>

      <div
        className="hide"
        ref={(el: HTMLDivElement | null) => sectionsRef.current.push(el)}
      >
        <Register />
      </div>

      <div
        className="card-contact hide"
        ref={(el) => sectionsRef.current.push(el)}
      >
        <ContactCard
          contentTitle="Possui alguma dúvida?"
          btnMsg="Chamar no WhatsApp"
          text="Envie uma mensagem e converse com uma pessoa real"
          borderColor="rgb(41, 224, 168)"
          textColor="rgb(41, 224, 168)"
          idButton="card-contact-whatsapp"
        />
        <div className="space-card"></div>
        <ContactCard
          contentTitle="Conheça as promoções"
          btnMsg="Ver promoções"
          text="Veja todas as ofertas existentes no momento"
          borderColor="var(--primary-color)"
          textColor="black"
          idButton="card-contant-normal"
        />
      </div>
      <div className="funcionamento center-text">
        <h1>Como funciona a plataforma</h1>
        <div
          className="card-funcionamento-content hide"
          ref={(el) => sectionsRef.current.push(el)}
        >
          <FunctionCard
            titulo="Conteúdo Atualizado"
            icon="bi-journal-check"
            text="Fique sempre à frente com atualizações constantes e melhorias em nosso conteúdo."
          />
          <FunctionCard
            titulo="Novos Lançamentos Inclusos"
            icon="bi-box-seam"
            text="Receba automaticamente novos lançamentos sem custos adicionais."
          />
          <FunctionCard
            titulo="Suporte Personalizado"
            icon="bi-headset"
            text="Contate nosso suporte 24/7 para tirar dúvidas e resolver problemas rapidamente."
          />
          <FunctionCard
            titulo="Certificação Reconhecida"
            icon="bi-award"
            text="Conquiste certificações validadas por especialistas da indústria ao completar cursos."
          />
        </div>
      </div>

      <div className="courses">
        <div className="center-text">
          <h1>Veja a nossa gama de cursos</h1>
          <div
            className="course-content hide"
            ref={(el) => sectionsRef.current.push(el)}
          >
            {cursos.slice(0, 6).map(
              (
                curso,
                index // Limita a exibição para 6 cursos
              ) => (
                <CourseCard
                  address=""
                  key={index}
                  course={curso.course}
                  level={curso.level}
                  structor={curso.structor}
                  structor_about={curso.structor_about}
                  course_state={curso.course_state}
                  imageCourse={curso.imageCourse}
                />
              )
            )}
          </div>
        </div>
      </div>

      {/*
      <div className="promotions">
        <div className="center-text">
          <h3>Além de formações, ganhe acesso a diversos previlégios</h3>
          <div
            className="card-previlegies-content hide"
            ref={(el) => sectionsRef.current.push(el)}
          >
            <Previlegies image={imagePrevilegies} type="Gold" clr="#f3d678" />
            <Previlegies image={imagePrevilegies} type="Silver" clr="#afaeae" />
            <Previlegies image={imagePrevilegies} type="Bronze" clr="#eef08e" />
          </div>
        </div>
      </div>

*/}
      <div className="center-text">
        <div
          className="about-container hide"
          ref={(el) => sectionsRef.current.push(el)}
        >
          <About
            title="Excelentes avaliações"
            icon="bi-star-fill"
            text="Essa é a média de avaliação das nossas aulas na plataforma."
          />
          <About
            title="+30 Cursos"
            icon="bi-person-video3"
            text="Acesso imediato a todo conteúdo disponível na plataforma para assistir no seu ritmo. Com atualizações inclusas na assinatura."
          />
          <About
            title="Inúmeros de conteúdo"
            icon="bi-clock"
            text="Você tem acesso a benefícios para assinantes: mentorias, masterclass ao vivo e eventos exclusivos para alunos."
          />
          <About
            title="Exercícios práticos"
            icon="bi-play-btn"
            text="Você vai aprender na prática com diversos projetos e cases reais pra evoluir o seu portfólio, além de colecionar certificados para o seu currículo."
          />
        </div>
      </div>
      <Scroll />
      <div className="solution-container">
        <Solution />
      </div>

      <div className="depoiments">
        <div className="center-text">
          <div className="depoiments-top">
            <h1>Veja o depoimento de quem passou pela nossa instituição</h1>
            <div>
              <p>O próximo depoimento pode ser seu!</p>
              <i className="bi bi-arrow-down"></i>
            </div>
          </div>
          <div
            className="depoiments-downn hide"
            ref={(el) => sectionsRef.current.push(el)}
          >
            {depoimentsData.map((depoiment, index) => (
              <DepoimentsCard
                key={index}
                text_dep={depoiment.text_dep}
                image_dep={depoiment.image_dep}
                name_dep={depoiment.name_dep}
                position_dep={depoiment.position_dep}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="faq" ref={(el) => sectionsRef.current.push(el)}>
        <div className="center-text">
          <h1 className="faq-top">Perguntas e respostas mais frequentes</h1>
          <div className="question">
            <ul className="hide" ref={(el) => sectionsRef.current.push(el)}>
              {faqs.map((faq, index) => (
                <Faq
                  key={index}
                  number={faq.number}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </ul>
            <div className="call-whatsapp">
              <div className="call-what-content">
                <div className="whatsapp-icon">
                  <i className="bi bi-whatsapp"></i>
                </div>
                <h1 className="call-w-title">Ficou com alguma dúvida?</h1>
                <p className="call-text">
                  Envie uma mensagem e converse com uma pessoa real.
                </p>
              </div>
              <button>
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://wa.me/SEU_NUMERO_DE_TELEFONE?text=Olá! Tenho uma dúvida.",
                      "_blank"
                    );
                  }}
                >
                  Chamar no WhatsApp
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
