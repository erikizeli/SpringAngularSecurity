package com.erik.security.demo;


import com.erik.security.auth.*;
import com.erik.security.config.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    private final UserService service;


    @PostMapping("/get")
    public ResponseEntity<UserResponse> getText(
            @RequestBody UserRequest request){

        UserResponse response = service.getText(request);
        return ResponseEntity.ok().body(response);
    }

    @PostMapping("/post")
    public void addText(
            @RequestBody UserRequest request
    ) {
        service.addText(request);

    }
}
