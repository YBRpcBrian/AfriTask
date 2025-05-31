
test("Should create a new task", async () => {
    const response = await createTask({
      title: "Logo Design",
      budget: 5000,
      jobOwnerId: "12345",
    });
    expect(response.status).toBe("success");
  });
  