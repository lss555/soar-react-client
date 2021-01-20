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

          <h4>Do I really need therapy?</h4>
          <p>I can usually handle my problems.
          Every one goes through challenging situations in life, and while you may have successfully navigated through other difficulties you've faced, there's nothing wrong with seeking out extra support when you need it. In fact, therapy is for people who have enough self-awareness to realize they need a helping hand, and that is something to be admired. You are taking responsibility by accepting where you're at in life and making a commitment to change the situation by seeking therapy. Therapy provides long-lasting benefits and support, giving you the tools you need to avoid triggers, re-direct damaging patterns, and overcome whatever challenges you face.</p>

          <h4>Why do people go to therapy and how do I know if it is right for me?</h4>
          <p>People have many different motivations for coming to psychotherapy. Some may be going through a major life transition (employment, divorce, new job, etc.), or are not handling stressful circumstances well. Some people need assistance managing a range of other issues such as low self-esteem, depression, anxiety, addictions, relationship problems, spiritual conflicts and creative blocks. Therapy can help provide some much needed encouragement and support.
          Others may be at a point where they are ready to learn more about themselves or want to be more effective with their goals in life. In short, people seeking psychotherapy are ready to meet the challenges of their lives and ready to make changes in their lives.</p>

          <h4>What is therapy like?</h4>
          <p>Because each person has different issues and goals for therapy, therapy will be different depending on the individual, in general, you can expect to discuss the current events happening in your life, your personal history relevant to your issue, and report progress (or any new insights gained) from the previous therapy session. Depending on your specific needs, therapy can be short-term, for a specific issue, or longer-term , to deal with more difficult patterns or your desire for more personal development. Either way, it is most common to schedule regular sessions with your therapist (usually weekly).</p>
          <p>It is important to understand that you will get more results from therapy if you actively participate in the process. The ultimate purpose of therapy is to help you bring what you learn in session back to your life. Therefore, beyond the work you do such as reading a pertinent book, journaling on specific topics, noting particular behaviors or taking action on your goals. People seeking psychotherapy are ready to make positive changes to their lives and are open to new perspectives and take responsibility for their lives.</p>

          <h4>What about medications vs. psychotherapy?</h4>
          <p>It is well established that the long-term solution to mental and emotional problems and the pain they cause cannot be solved solely by medication. Instead of just treating the symptom, therapy addresses the cause of our distress and the behavior patterns that curb our progress. You can best achieve sustainable growth and a greater sense of well-being with an integrative approach to wellness. Working with your medical doctor you can determine what's best for you, and in some cases a combination of medication and therapy is the right course of action.</p>

          <h4>Do you take insurance, and how does that work?</h4>
          <p>To determine if you have mental health coverage through your insurance carrier, the first thing you should do is call them. Check your coverage carefully and make sure you understand their answers. Some helpful questions you can ask them are:</p>
          <ol>
            <li>What is the coverage amount per therapy session?  90837 is the billing code of therapy to ask about.</li>
            <li>What am I responsible for financially?</li>
            <li>Do I have a co-pay?</li>
            <li>Does my deductible apply to this service?</li>
            <li>Is Soar Counseling Services Inc. Cheri kreitzmann, LPC in-network?</li>
          </ol>

          <h4>Does what we talk about in therapy remain confidential?</h4>
          <p>Confidentiality is one of the most important components between a client and psychotherapist. Successful therapy requires a high degree of trust with highly sensitive subject matter that is usually not discussed anywhere but the therapists office. Every therapist should provide a written copy of their confidential disclosure agreement, and you can expect that what you discuss in session will not be shared with anyone. This is called “informed consent”. Sometimes, however, you may want your therapist to share information or give an update to someone on your health care team (your physician, naturalist, attorney) but by law your therapist cannot release this information without obtaining you written permission.</p>

          <h5>However, state law and professional ethics require therapists to maintain confidentially except for the following situations:</h5>

          <ol>
            <li>Suspected past or present abuse of neglect of children, adults , and elders, to the authorities including Child Protective and law enforcement, based on information provided by the client or collateral sources.</li>
            <li>If the therapist has reason to suspect the client is seriously in danger or harming him/herself or has threatened to harm another person.</li>
          </ol>
          <Button
          to='/'
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
