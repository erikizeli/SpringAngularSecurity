package com.erik.security.demo;


import com.erik.security.auth.UserRequest;
import com.erik.security.auth.UserResponse;
import com.erik.security.config.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/management")
@RequiredArgsConstructor
public class ManagerController {

    private final UserService service;


    @PostMapping("/get")
    public ResponseEntity<UserResponse> getText(
            @RequestBody UserRequest request){
        return ResponseEntity.ok(service.getText(request));
    }

    @PostMapping("/post")
    public void addText(
            @RequestBody UserRequest request
    ) {
        service.addText(request);
    }
}
