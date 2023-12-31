package tingeso3.scriptservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ScriptServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ScriptServiceApplication.class, args);
	}

}
