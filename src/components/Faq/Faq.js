import React from 'react';
import './Faq.css';
import { Button } from '../ButtonElement.js'

const Faq = ({ onHover, primary }) => {
    return (
        <div className='faq-container'>
          <h1>Common Questions</h1>
          <h4>How can therapy help me?</h4>
          <p>A number of benefits are available from participating in therapy. Therapists can provide support, problem-solving skills, and enhance coping strategies for issues such as depression, anxiety, relationship troubles, unresolved childhood issues, grief, stress management, body image issues and creative blocks. Many people also find that counselors can be a tremendous asset to managing personal growth, interpersonal relationships, family concerns, marriage issues, and the hassles of daily life. Therapists can provide a fresh perspective on a difficult problem or point you in the direction of a solution. The benefits you obtain from therapy depend on how well you use the process and put into practice what you learn. Some of the benefits available from therapy include:</p>
          <ul>
            <li>Attaining a better understanding of yourself, your goals and values</li>
            <li>Developing skills for improving your relationships</li>
            <li>Finding resolution to the issues or concerns that led you to seek therapy</li>
            <li>Learning new ways to cope with stress and anxiety</li>
            <li>Managing anger, grief, depression, and other emotional pressures</li>
            <li>Improving communications and listening skills</li>
            <li>Changing old behavior patterns and developing new ones</li>
            <li>Discovering new ways to solve issues in your family or relationship</li>
            <li>Improving your self-esteem and boosting self-confidence</li>
          </ul>

          <Button
          to='/home'
          className='home-btn'
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary={primary ? 1 : 0}
          dark='true'
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
          >Return to homepage</Button>
        </div>
    )
}

export default Faq
