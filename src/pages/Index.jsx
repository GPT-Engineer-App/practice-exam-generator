import React, { useState } from 'react';
import { Container, VStack, Input, Button, Textarea, Text, Box, useToast } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  const [university, setUniversity] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [topics, setTopics] = useState('');
  const [exam, setExam] = useState('');
  const [answers, setAnswers] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(null);
  const toast = useToast();

  const generateExam = async () => {
    // Placeholder for OpenAI API call
    const generatedExam = `Generated exam for ${university} - ${courseCode} on topics: ${topics}`;
    setExam(generatedExam);
  };

  const submitAnswers = () => {
    // Placeholder for answer submission and feedback generation
    const generatedFeedback = `Feedback for your answers: ...`;
    setFeedback(generatedFeedback);
    setScore(Math.floor(Math.random() * 100)); // Random score for demonstration
  };

  const showScore = () => {
    toast({
      title: `Your Score: ${score}`,
      status: 'info',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">Practice Exam Generator</Text>
        <Input placeholder="University Name" value={university} onChange={(e) => setUniversity(e.target.value)} />
        <Input placeholder="Course Code" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} />
        <Textarea placeholder="List of Topics (comma separated)" value={topics} onChange={(e) => setTopics(e.target.value)} />
        <Button colorScheme="teal" onClick={generateExam}>Generate Exam</Button>
        {exam && (
          <Box width="100%" p={4} borderWidth={1} borderRadius="md">
            <Text fontSize="xl" fontWeight="bold">Generated Exam</Text>
            <Text mt={2}>{exam}</Text>
          </Box>
        )}
        {exam && (
          <>
            <Textarea placeholder="Enter your answers here" value={answers} onChange={(e) => setAnswers(e.target.value)} />
            <Button colorScheme="blue" onClick={submitAnswers}>Submit Answers</Button>
          </>
        )}
        {feedback && (
          <Box width="100%" p={4} borderWidth={1} borderRadius="md">
            <Text fontSize="xl" fontWeight="bold">Feedback</Text>
            <Text mt={2}>{feedback}</Text>
          </Box>
        )}
        {score !== null && (
          <Button colorScheme="green" leftIcon={<FaCheckCircle />} onClick={showScore}>Show Score</Button>
        )}
      </VStack>
    </Container>
  );
};

export default Index;