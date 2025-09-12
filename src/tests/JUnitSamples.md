
✅ This shows a **class-style UML diagram** recruiters will like.  

---

# 🟦 Step 2 – Add JUnit Test Samples (in `tests/JUnitSamples.md`)

Create file: `tests/JUnitSamples.md`  

```markdown
# JUnit Test Samples (Demo)

Below are simple test cases representing the kind of unit testing I practiced at Surya Allied Services.  
This is only for demonstration — code is synthetic.

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class StatusServiceTest {

    @Test
    void testServiceRunning() {
        String status = "Running";
        assertEquals("Running", status, "Service should be Running");
    }

    @Test
    void testServiceNotNull() {
        String service = "Database";
        assertNotNull(service, "Service name should not be null");
    }
}
