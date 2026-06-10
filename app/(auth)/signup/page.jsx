"use client";

import React, { useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const PageContainer = styled.div`
  min-height: 100vh;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(249, 250, 251, 0.4);
  position: relative;
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  /* width: 100%; */
  background-image: url("/screen.jpg");
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  opacity: 0.07;
  pointer-events: none;
  mix-blend-mode: multiply;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  z-index: 10;
`;

const FormCard = styled.div`
  width: 100%;
  max-width: 460px;
  background-color: #ffffff;
  border: 1px solid rgba(229, 231, 235, 0.8);
  border-radius: 0.125rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.01);
`;

const CardHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #111827;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: -0.025em;
`;

const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5rem;
  line-height: 1.625;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.375rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.625rem 0.875rem;
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 0.125rem;
  font-size: 0.875rem;
  color: #111827;
  transition: all 0.2s;
  box-sizing: border-box;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #11703c;
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 1px #11703c;
  }
`;

const InputHint = styled.p`
  font-size: 11px;
  color: #6b7280;
  margin-top: 0.375rem;
`;

const PasswordWrapper = styled.div`
  position: relative;
`;

const PasswordInput = styled(Input)`
  padding-left: 0.875rem;
  padding-right: 2.5rem;
`;

const ToggleButton = styled.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  &:hover {
    color: #4b5563;
  }

  &:focus {
    outline: none;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: start;
`;

const Checkbox = styled.input`
  height: 1rem;
  width: 1rem;
  margin-top: 0.125rem;
  border-radius: 0.25rem;
  border-color: #d1d5db;
  color: #11703c;
  cursor: pointer;

  &:focus {
    color: #11703c;
  }
`;

const CheckboxLabel = styled.label`
  margin-left: 0.625rem;
  font-size: 0.75rem;
  color: #4b5563;
  line-height: 1.5;
  user-select: none;
  cursor: pointer;
`;

const InlineLink = styled(Link)`
  color: #11703c;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonWrapper = styled.div`
  padding-top: 0.5rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #11703c;
  color: #ffffff;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 0.125rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0e5c31;
  }

  &:active {
    background-color: #0b4826;
  }
`;

const FooterRedirect = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: #4b5563;
`;

const Footer = styled.footer`
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  text-align: center;
  font-size: 10px;
  font-weight: 700;
  color: #9ca3af;
  display: block;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  z-index: 10;
`;

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <PageContainer>
      <BackgroundOverlay />

      <MainContent>
        <FormCard>
          <CardHeader>
            <Title>Join NairaPrice</Title>
            <Subtitle>
              Real-time commodity data for Nigeria&apos;s agricultural sector.
            </Subtitle>
          </CardHeader>

          <Form onSubmit={handleSubmit}>
            <FieldGroup>
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                id="full-name"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
              />
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="email-address">Email Address</Label>
              <Input
                id="email-address"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
              />
              <InputHint>Used for weekly market alerts.</InputHint>
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="secure-password">Password</Label>
              <PasswordWrapper>
                <PasswordInput
                  id="secure-password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a secure password"
                />
                <ToggleButton
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      style={{ width: "1rem", height: "1rem" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      style={{ width: "1rem", height: "1rem" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  )}
                </ToggleButton>
              </PasswordWrapper>
            </FieldGroup>

            <CheckboxWrapper>
              <Checkbox
                id="agree-terms"
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <CheckboxLabel htmlFor="agree-terms">
                I agree to the{" "}
                <InlineLink href="/terms">Terms and Conditions</InlineLink> and
                the <InlineLink href="/privacy">Privacy Policy</InlineLink>{" "}
                regarding commodity data usage.
              </CheckboxLabel>
            </CheckboxWrapper>

            <ButtonWrapper>
              <SubmitButton type="submit">Create Account</SubmitButton>
            </ButtonWrapper>
          </Form>

          <FooterRedirect>
            Already have an account?{" "}
            <InlineLink href="/login">Sign In</InlineLink>
          </FooterRedirect>
        </FormCard>
      </MainContent>

      <Footer>Trusted by 50,000+ Nigerian Traders</Footer>
    </PageContainer>
  );
}
