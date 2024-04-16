package com.example.application.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.Arrays;


/**
 * Questa classe viene utilizzata per configurare il filtro CORS.
 */
@Configuration
@EnableWebMvc
public class WebConfig {

    /** Creazione del bean che conterrà la configurazione del filtro
     * Creazione e registro filtro cors, ricorda che questo deve essere eseguito prima di qualsiasi altro bean
     */
    @Bean
    public FilterRegistrationBean corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration(); // -> Quest'oggetto conterrà la configurazione del filtro Cors
        config.setAllowCredentials(true); // -> consente al backend di ricevere le intestazioni che contengono le informazioni di autenticazione
        config.addAllowedOrigin("http://localhost:4200"); // -> url del front-end, le richieste da questo url sono autorizzate a passare attraverso il filtro
        config.setAllowedHeaders(Arrays.asList( // -> intestazioni tipiche che il backend dovrà accettare
                HttpHeaders.AUTHORIZATION,
                HttpHeaders.CONTENT_TYPE,
                HttpHeaders.ACCEPT
        ));
        config.setAllowedMethods(Arrays.asList(
                // metodi che il backend deve accettare
                HttpMethod.GET.name(),
                HttpMethod.POST.name(),
                HttpMethod.PUT.name(),
                HttpMethod.DELETE.name()
        ));
        config.setMaxAge(3600L); // -> questo è il tempo in cui la configurazione CORS viene accettata 30 min
        source.registerCorsConfiguration("/**", config); // ! qui il cors viene registrato con Spring e applicato in tutti i percorsi
        FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
        bean.setOrder(-102); // posizione più bassa per essere eseguito prima di qualsiasi Spring bean
        return bean;
    }
}
