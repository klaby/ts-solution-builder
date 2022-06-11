const ts = require("typescript");

const host = ts.createSolutionBuilderHost(
  undefined,
  ts.createEmitAndSemanticDiagnosticsBuilderProgram,
  this.report,
  undefined,
  () => {}
);

const builder = ts.createSolutionBuilder(host, [process.cwd()], {
  verbose: true,
  incremental: true,
  force: false,
  traceResolution: true,
});

while (true) {
  const project = builder.getNextInvalidatedProject();

  if (!project) {
    break;
  }

  project.done();
}

builder.build();
