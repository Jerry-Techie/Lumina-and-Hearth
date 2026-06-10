"use client";

import React, { useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: linear-gradient(to top right, #f4fcf7, #ffffff, #edf7f2);
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;

  & *::selection {
    background-color: rgba(21, 128, 61, 0.2);
  }
`;

const Spacer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const MainContentWrapper = styled.div`
  /* width: 100%; */
  max-width: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const BrandingHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const BrandLogoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  color: #15803d;
  font-weight: 700;
  font-size: 1.125rem;
`;

const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.25rem;
  font-weight: 500;
`;

const Card = styled.div`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #f3f4f6;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.02);

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

const CardTitle = styled.h2`
  color: #111827;
  font-weight: 600;
  font-size: 17px;
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.25rem;
  margin-bottom: 1.5rem;
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

const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.375rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: ${(props) => (props.noMargin ? "0" : "0.375rem")};
`;

const StyledLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 500;
  color: #15803d;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.625rem 0.875rem;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: #111827;
  transition: all 0.2s;
  box-sizing: border-box;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #15803d;
    box-shadow: 0 0 0 2px rgba(21, 128, 61, 0.1);
  }
`;

const RelativeContainer = styled.div`
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

  &:hover {
    color: #4b5563;
  }

  &:focus {
    outline: none;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  height: 1rem;
  width: 1rem;
  border-radius: 0.25rem;
  border-color: #d1d5db;
  color: #15803d;
  cursor: pointer;

  &:focus {
    color: #15803d;
  }
`;

const CheckboxLabel = styled.label`
  margin-left: 0.5rem;
  display: block;
  font-size: 0.875rem;
  color: #4b5563;
  user-select: none;
  cursor: pointer;
`;

const Divider = styled.div`
  border-top: 1px solid #f3f4f6;
  padding-top: 0.25rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #15803d;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.625rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    background-color: #166534;
  }

  &:active {
    background-color: #14532d;
  }

  &:focus {
    outline: none;
    box-shadow:
      0 0 0 2px #ffffff,
      0 0 0 4px #15803d;
  }
`;

const RedirectWrapper = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: #4b5563;
`;

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });

    router.push("/dashboard");
  };

  return (
    <PageContainer>
      <Spacer />

      <MainContentWrapper>
        <BrandingHeader>
          <BrandLogoRow>
            <span>NairaPrice</span>
            <span style={{ display: "inline-flex", alignItems: "center" }}>
              🇳🇬
            </span>
          </BrandLogoRow>
          <Subtitle>Real-time agricultural commodity insights</Subtitle>
        </BrandingHeader>

        <Card>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>
            Please enter your details to sign in.
          </CardDescription>

          <Form onSubmit={handleSubmit}>
            <FieldGroup>
              <Label htmlFor="email-address">Email Address</Label>
              <Input
                id="email-address"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. name@company.com"
              />
            </FieldGroup>

            <FieldGroup>
              <LabelRow>
                <Label htmlFor="secure-password" noMargin>
                  Password
                </Label>
                <StyledLink href="/forgot-password">
                  Forgot Password?
                </StyledLink>
              </LabelRow>
              <RelativeContainer>
                <PasswordInput
                  id="secure-password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                />
                <ToggleButton
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      style={{ width: "1.25rem", height: "1.25rem" }}
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
                      style={{ width: "1.25rem", height: "1.25rem" }}
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
              </RelativeContainer>
            </FieldGroup>

            <CheckboxContainer>
              <Checkbox
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <CheckboxLabel htmlFor="remember-me">
                Remember this device for 30 days
              </CheckboxLabel>
            </CheckboxContainer>

            <Divider />

            <SubmitButton type="submit">
              <span>Sign In</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                style={{ width: "1rem", height: "1rem" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H8.25"
                />
              </svg>
            </SubmitButton>
          </Form>

          <RedirectWrapper>
            New to NairaPrice?{" "}
            <StyledLink href="/signup">Create an account</StyledLink>
          </RedirectWrapper>
        </Card>
      </MainContentWrapper>
    </PageContainer>
  );
}
