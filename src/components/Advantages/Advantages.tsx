import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import AdvantageRow from "./AdvanatageRow/AdvantageRow";
import styles from "./Advanatges.module.css";
import Tag from "../Tag/Tag";

interface AdvantagesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Advantages: FC<AdvantagesProps> = ({ className, ...props }) => {
  return (
    <div className={`${className || ""} ${styles.wrapper}`} {...props}>
      <AdvantageRow
        title="Мобильность специалиста"
        description="Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах."
      />
      <AdvantageRow
        title="Индивидуальный график работы"
        description="Если освоить программы и найти заказы по графическому дизайну, вскоре окажется, что вставать в 6:00 вовсе не обязательно. Когда у человека вечером продуктивность выше, надо этим пользоваться."
      />
      <AdvantageRow
        title="Контроль дохода"
        description="Прохождения собеседований в крупные компании могут принести свои плоды. В случае с профессией графического дизайна вполне возможна работа на рынке фриланса. Специалист сам выбирает регион, с кем работать и сколько работать. В связи с этим получится точно контролировать доход в большую или меньшую сторону."
      />
      <AdvantageRow
        title="Выбор работы"
        description="Пользователи сети, которые знают Photoshop, не обязательно должны выполнять одну работу. Профессия графического дизайнера дает возможность отойти от обычных проектов и повысить скил в других компьютерных программах."
      />
      <div className="description">
        При завершении очередного проекта над графикой, специалист всегда задает
        себе вопрос о дальнейших перспективах. Отличие профессиональных
        дизайнеров заключается в том, что они гибкие. Сегодня разрабатывается
        логотип новой компании, а завтра вполне можно переключиться на
        иллюстрацию культовой книги.
      </div>

      <div className={styles.skillsRow}>
        <div className={styles.title}>
          Получаемые навыки
        </div>
        <div className={styles.skills}>
          <Tag color="primary" size="M">Работа в Photoshop</Tag>
          <Tag color="primary" size="M">Подготовка макетов</Tag>
          <Tag color="primary" size="M">Графический дизайн</Tag>
          <Tag color="primary" size="M">Web дизайн</Tag>
          <Tag color="primary" size="M">Дизайн сайтов</Tag>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
