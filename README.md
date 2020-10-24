노마드 코더 GraphQL 강의
===========================================
            
### GraphQL로 해결할 수 있는 2가지 문제
1. overfetching         
* overfetching 이란?      
필요 이상의 데이터를 받는 것을 overfetching이라고 한다.
              
ex)           
사용자의 이름이 필요하여 GET 요청을 한다. 하지만 응답으로 사용자의 이름 뿐만이 아니라 프로필 사진, 사용자 나이까지 전달 됨               
                   
이와 같이 데이터베이스에서 필요 없는 부분까지 조회하고 유저들이 필요 없는 정보까지 받게 되는 것을 overfetching이라고 한다.(요청한 영역의 정보보다 많은 정보를 서버에서 받는 것)                 
                
                  
* overfetching으로 인한 문제             
1) 비효율적      
2) 개발자들이 뭘 받았는지 모르게 됨           
            

* GraphQL은 이러한 overfetching 문제를 해결할 수 있다.             
               
                
2. underfetching
*  underfetching 이란?
REST에서 하나를 완성하려고 많은 소스를 요청하는 것을 의미한다.
          

* GraphQL은 이러한 overfetching 문제를 해결할 수 있다.       
             
             

### GraphQL은 URL은 존재하지 않는다.
        
### GraphQL은 사용자가 요청한 정보들만 받을 수 있도록 해준다.
        
### GraphQL의  schemasms 사용자에게 보내거나 사용자로부터 받을 data에 대한 설명이다.