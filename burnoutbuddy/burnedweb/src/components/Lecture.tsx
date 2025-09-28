import styled from "@emotion/styled";
import { useParams } from "react-router-dom";

const LectureContainer = styled.div`
  flex-grow: 1;
  padding: 20px 40px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
`;

const Breadcrumbs = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #000;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 15px;
  color: #000;
`;

const SubSectionTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 25px;
  margin-bottom: 10px;
  color: #000;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  font-size: 16px;
`;

const Lecture: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <LectureContainer>
      <Breadcrumbs>
        Course / <span>Lesson {id}</span>
      </Breadcrumbs>

      <MainTitle>Lesson {id}: Mastering the Art of Active Listening</MainTitle>

      <Paragraph>
        Active listening is a crucial soft skill that involves fully
        concentrating on what is being said rather than just passively 'hearing'
        the message of the speaker. It requires the listener to pay attention,
        show that they are listening, provide feedback, and respond
        appropriately. This skill is essential in both personal and professional
        settings as it fosters better understanding, builds trust, and
        strengthens relationships. In this lesson, we will explore the key
        components of active listening and provide practical techniques to
        enhance your ability to listen effectively.
      </Paragraph>

      <SectionTitle>Key Components of Active Listening</SectionTitle>

      <Paragraph>
        Active listening involves several key components that work together to
        ensure effective communication. These components include paying
        attention, showing that you are listening, providing feedback, and
        responding appropriately. Each of these elements plays a vital role in
        understanding the speaker's message and building a strong connection.
      </Paragraph>

      <SubSectionTitle>Paying Attention</SubSectionTitle>
      <Paragraph>
        Paying attention is the foundation of active listening. It means
        focusing entirely on the speaker and their message, both verbal and
        non-verbal. This involves minimizing distractions, such as turning off
        your phone or finding a quiet place to talk. It also means observing the
        speaker's body language, facial expressions, and tone of voice to gain a
        deeper understanding of their message.
      </Paragraph>

      <SubSectionTitle>Showing That You Are Listening</SubSectionTitle>
      <Paragraph>
        Showing that you are listening involves using both verbal and non-verbal
        cues to indicate your engagement. Non-verbal cues include maintaining
        eye contact, nodding your head, and using open body language. Verbal
        cues can include using minimal encouragers like 'yes,' 'I see,' or 'go
        on' to encourage the speaker to continue. These cues help the speaker
        feel heard and understood.
      </Paragraph>

      <SubSectionTitle>Providing Feedback</SubSectionTitle>
      <Paragraph>
        Providing feedback is crucial for clarifying understanding and ensuring
        that you are accurately interpreting the speaker's message. This can be
        done through paraphrasing, which involves restating the speaker's
        message in your own words, or asking clarifying questions to gain more
        information. Feedback helps the speaker know that you are engaged and
        that you are making an effort to understand their perspective.
      </Paragraph>

      <SubSectionTitle>Responding Appropriately</SubSectionTitle>
      <Paragraph>
        Responding appropriately means reacting to the speaker's message in a
        way that is relevant and respectful. This involves considering the
        speaker's emotions and the context of the conversation. Your response
        should show empathy and understanding, and it should contribute to the
        conversation in a meaningful way. Avoid interrupting or changing the
        subject abruptly.
      </Paragraph>

      <SectionTitle>Techniques to Enhance Active Listening</SectionTitle>
      <Paragraph>
        To improve your active listening skills, practice the following
        techniques regularly. These techniques will help you become a more
        effective listener and communicator in various situations.
      </Paragraph>

      <SubSectionTitle>Practice Mindfulness</SubSectionTitle>
      <Paragraph>
        Mindfulness involves being fully present in the moment and focusing your
        attention on the speaker without letting your mind wander. Before a
        conversation, take a moment to clear your thoughts and prepare to listen
        attentively. During the conversation, stay focused on the speaker's
        words and non-verbal cues.
      </Paragraph>

      <SubSectionTitle>Use Reflective Listening</SubSectionTitle>
      <Paragraph>
        Reflective listening involves summarizing and reflecting back what the
        speaker has said to ensure understanding. Use phrases like 'It sounds
        like you're saying...' or 'So, what I'm hearing is...' to confirm your
        understanding and give the speaker an opportunity to clarify if needed.
        This technique shows that you are actively processing the information
        and are committed to understanding the speaker's perspective.
      </Paragraph>

      <SubSectionTitle>Ask Open-Ended Questions</SubSectionTitle>
      <Paragraph>
        Open-ended questions encourage the speaker to provide more detailed
        information and express their thoughts and feelings more fully. Instead
        of asking questions that can be answered with a simple 'yes' or 'no,'
        ask questions like 'Can you tell me more about that?' or 'How did that
        make you feel?' These questions promote deeper conversation and
        understanding.
      </Paragraph>

      <SubSectionTitle>Avoid Interrupting</SubSectionTitle>
      <Paragraph>
        Interrupting can disrupt the flow of conversation and make the speaker
        feel unheard. Allow the speaker to finish their thoughts before
        responding. If you need clarification, wait for a natural pause in the
        conversation to ask your questions. This shows respect for the speaker
        and their message.
      </Paragraph>

      <SubSectionTitle>Show Empathy</SubSectionTitle>
      <Paragraph>
        Empathy is the ability to understand and share the feelings of another
        person. When listening, try to put yourself in the speaker's shoes and
        understand their emotions and perspective. Respond with empathy by
        acknowledging their feelings and showing that you care about their
        experience. This builds trust and strengthens the relationship.
      </Paragraph>

      <SectionTitle>Conclusion</SectionTitle>
      <Paragraph>
        Mastering the art of active listening is a journey that requires
        practice and patience. By focusing on paying attention, showing that you
        are listening, providing feedback, and responding appropriately, you can
        significantly improve your communication skills. Incorporate the
        techniques discussed in this lesson into your daily interactions to
        become a more effective listener and build stronger relationships both
        personally and professionally.
      </Paragraph>
    </LectureContainer>
  );
};

export default Lecture;
