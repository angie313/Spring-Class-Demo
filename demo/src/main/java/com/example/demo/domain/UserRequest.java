package com.example.demo.domain;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRequest {

    @NotNull(message = "First name cannot be null")
    @NotBlank(message = "First name cannot be empty")
    @Pattern(regexp = "[a-zA-Z]*", message = "First name can only be alphabet")
    private String firstName;
    private String lastName;
    private String phone;
    private String email;

    @Min(value = 18, message = "age cannot be less than 16")
    @Max(value = 150, message = "age cannot be more than 150")
    private int age;

}
